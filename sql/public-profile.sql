DROP TABLE IF EXISTS user_profile CASCADE;

CREATE TABLE user_profile (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  username VARCHAR(254) UNIQUE,
  full_name VARCHAR(254),
  avatar_url VARCHAR(254)
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security FOR more details.
ALTER TABLE user_profile
  ENABLE ROW LEVEL SECURITY;

CREATE policy "Profiles viewable by everyone." ON user_profile
  FOR SELECT USING (TRUE);

CREATE policy "Users can insert into their own profile." ON user_profile
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE policy "Users can update own profile." ON user_profile
  FOR UPDATE USING (auth.uid() = id);