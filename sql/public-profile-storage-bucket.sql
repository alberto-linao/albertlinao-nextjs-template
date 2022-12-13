-- LAST RUN: NOV 20, 2022. 1:43 PM
-- Set up Storage!
INSERT INTO storage.buckets (id, name)
  VALUES ('avatar', 'avatar');

-- Set up access controls FOR storage.
-- See https://supabase.com/docs/guides/storage#policy-examples FOR more details.
CREATE policy "Avatar images are publicly accessible." ON storage.objects
  FOR SELECT USING (bucket_id = 'avatar');

CREATE policy "Anyone can upload an avatar." ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'avatar');

CREATE policy "Anyone can update their own avatar." ON storage.objects
  FOR UPDATE USING (auth.uid() = owner) WITH CHECK (bucket_id = 'avatar');