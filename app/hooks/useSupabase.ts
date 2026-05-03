"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useSupabase() {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setError("Supabase client not initialized. Check environment variables.");
      return;
    }
    setIsReady(true);
  }, []);

  const fetchComments = async (): Promise<any[]> => {
    setLoading(true);
    try {
      const { data, error: err } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });
      if (err) throw err;
      return data || [];
    } catch (e: any) {
      setError(e.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (comment: { name: string; message: string }): Promise<any> => {
    setLoading(true);
    try {
      const { data, error: err } = await supabase
        .from("comments")
        .insert([{ name: comment.name, message: comment.message }])
        .select()
        .single();
      if (err) throw err;
      return data;
    } catch (e: any) {
      setError(e.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { supabase, isReady, error, loading, fetchComments, addComment };
}
