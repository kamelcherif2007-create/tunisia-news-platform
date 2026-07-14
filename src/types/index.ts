export interface News {
  _id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  image?: string;
  author: string;
  status: 'draft' | 'pending' | 'approved' | 'published';
  views: number;
  likes: number;
  aiSummary?: string;
  keywords?: string[];
  sentiment?: 'positive' | 'neutral' | 'negative';
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  role: 'user' | 'contributor' | 'admin';
  verified: boolean;
  createdAt: Date;
}
