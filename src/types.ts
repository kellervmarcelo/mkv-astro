interface BlogPostFrontMatter { 
    title: string;
    date: string;
    draft?: boolean;
    tags?: string[];
}

export type { BlogPostFrontMatter }