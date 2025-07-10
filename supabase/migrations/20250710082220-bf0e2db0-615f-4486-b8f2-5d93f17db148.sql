
-- Create a table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'responded'))
);

-- Create a table for services (to make the services section dynamic)
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert the current services data
INSERT INTO public.services (title, description, icon_name, display_order) VALUES
('Web Development', 'Custom web applications built with modern technologies and best practices.', 'Code', 1),
('Database Solutions', 'Scalable database design and optimization for your business needs.', 'Database', 2),
('Cloud Services', 'Cloud infrastructure and deployment solutions for maximum reliability.', 'Cloud', 3),
('Security', 'Enterprise-grade security solutions to protect your digital assets.', 'Shield', 4);

-- Enable Row Level Security (RLS) for contact submissions
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact submissions (public can insert, but only authenticated users can view)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (false); -- For now, no one can read (will be updated when admin functionality is added)

-- Enable RLS for services
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Create policy for services (public read access)
CREATE POLICY "Anyone can view active services" 
  ON public.services 
  FOR SELECT 
  USING (is_active = true);
