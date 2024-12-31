type MediaType = {
    images: {
        image_id: string;
        url: string;
        alt_text: string;
        caption?: string;
    }[];
    videos: {
        video_id: string;
        url: string;
        title: string;
        thumbnail?: string;
    }[];
};

type AuthorType = {
    author_id: string;
    name: string;
    profile_url: string;
    avatar_url?: string;
    bio?: string;
};

type CommentReplyType = {
    reply_id: string;
    user_id: string;
    user_name: string;
    user_avatar?: string;
    content: string;
    posted_at: string; // ISO 8601 format
};

type CommentType = {
    comment_id: string;
    user_id: string;
    user_name: string;
    user_avatar?: string;
    content: string;
    posted_at: string; // ISO 8601 format
    replies?: CommentReplyType[];
};

type SEOType = {
    meta_title: string;
    meta_description: string;
    keywords?: string[];
    canonical_url: string;
};

type AnalyticsType = {
    shares: {
        facebook: number;
        twitter: number;
        linkedin: number;
    };
    average_read_time_minutes: number;
    bounce_rate: number;
};

type EditorialNotesType = {
    created_by: string;
    last_reviewed_by?: string;
    notes?: string;
};

export type ArticlePostType = {
    article_id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    author: AuthorType;
    co_authors?: AuthorType[];
    categories: string[];
    tags?: string[];
    published_at: string; // ISO 8601 format
    updated_at?: string; // ISO 8601 format
    status: "draft" | "published" | "archived";
    views: number;
    likes: number;
    comments_count: number;
    comments?: CommentType[];
    media: MediaType;
    seo: SEOType;
    analytics: AnalyticsType;
    editorial_notes?: EditorialNotesType;
};

type LibraryItem = {
    title: string;
    desc: string;
    icon: string;
    url: string;
    itemCount: number;
    lastUpdated: string;
    tags: string[];
};

export type LibraryType = LibraryItem[];

