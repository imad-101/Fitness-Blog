"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/src/utils/supabase";

export default function ViewCounter({ slug }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        // Get current views
        const { data: existingViews, error: fetchError } = await supabase
          .from("views")
          .select("count")
          .eq("slug", slug)
          .single();

        if (fetchError && fetchError.code !== "PGRST116") {
          console.error("Error fetching views:", fetchError);
          return;
        }

        if (existingViews) {
          // Update existing view count
          const { error: updateError } = await supabase
            .from("views")
            .update({ count: existingViews.count + 1 })
            .eq("slug", slug);

          if (updateError) {
            console.error("Error updating views:", updateError);
            return;
          }

          setViews(existingViews.count + 1);
        } else {
          // Create new view count
          const { error: insertError } = await supabase
            .from("views")
            .insert([{ slug, count: 1 }]);

          if (insertError) {
            console.error("Error inserting views:", insertError);
            return;
          }

          setViews(1);
        }
      } catch (error) {
        console.error("Error in view counter:", error);
      }
    };

    incrementView();
  }, [slug]);

  return <div className="text-sm text-gray-500">{views} views</div>;
}
