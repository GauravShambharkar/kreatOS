export interface Tweetdata {
    user: {
        name: string;
        username: string;
        avatar: string | null;
        isVerified: boolean;
    };
    content: {
        text: string;
        image?: string | null;
        date: Date;
        source: string; // e.g. "Twitter for iPhone"
    };
    stats: {
        retweets: number;
        likes: number;
        quotes: number;
        bookmarks: number;
        impressions: number;
    };
    theme: "light" | "dim" | "dark";
}

export const initialdata: Tweetdata = {
    user: {
        name: "John Doe",
        username: "johndoe",
        avatar: null, // We'll handle default in component
        isVerified: true,
    },
    content: {
        text: "This is a sample tweet to demonstrate the mockup generator. It looks just like the real thing!",
        date: new Date(),
        source: "Twitter for iPhone",
    },
    stats: {
        retweets: 124,
        quotes: 12,
        likes: 4521,
        bookmarks: 89,
        impressions: 24500,
    },
    theme: "light",
};

export interface Instadata {
    type: "post" | "reel";
    user: {
        name: string;
        username: string;
        avatar: string | null;
        isVerified: boolean;
    };
    content: {
        caption: string;
        image: string | null;
        video: string | null;
        location?: string;
        date: Date;
    };
    stats: {
        likes: number;
        comments: number;
        shares: number;
        reposts?: number;
    };
    theme: "light" | "dark";
    likedBy?: {
        name: string;
        avatar?: string | null;
    };
    reelInfo?: {
        audioName: string;
        audioArtist: string;
    };
}

export const initialInstadata: Instadata = {
    type: "post",
    user: {
        name: "Instagram User",
        username: "insta_user",
        avatar: null,
        isVerified: true,
    },
    content: {
        caption: "Living my best life! 🌟 #lifestyle #vibe",
        image: null,
        video: null,
        location: "Paris, France",
        date: new Date(),
    },
    stats: {
        likes: 1250,
        comments: 48,
        shares: 12,
        reposts: 5,
    },
    theme: "light",
    likedBy: {
        name: "alex_explorer",
        avatar: null,
    },
    reelInfo: {
        audioName: "Original Audio",
        audioArtist: "insta_user",
    },
};

export interface Linkedindata {
    user: {
        name: string;
        headline: string;
        avatar: string | null;
        connectionDegree: string;
        isVerified: boolean;
    };
    content: {
        text: string;
        image?: string | null;
        timeSincePost: string;
    };
    stats: {
        reactions: number;
        comments: number;
        reposts: number;
    };
    theme: "light" | "dark";
    reactionTypes: {
        like: boolean;
        celebrate: boolean;
        love: boolean;
        insightful: boolean;
        curious: boolean;
    };
}

export const initialLinkedindata: Linkedindata = {
    user: {
        name: "Alex Johnson",
        headline: "Principal Software Engineer at Tech Innovators | Tech Speaker | Open Source Advocate",
        avatar: null,
        connectionDegree: "1st",
        isVerified: true,
    },
    content: {
        text: "I am super excited to share that I have started a new role as Principal Software Engineer today! 🚀\n\nThanks to everyone who helped me along this journey. Can't wait to build great things with the team!",
        image: null,
        timeSincePost: "2h",
    },
    stats: {
        reactions: 412,
        comments: 34,
        reposts: 8,
    },
    theme: "light",
    reactionTypes: {
        like: true,
        celebrate: true,
        love: true,
        insightful: false,
        curious: false,
    }
};

export interface Youtubedata {
    video: {
        title: string;
        thumbnail: string | null;
        duration: string;
        views: number;
        likes: number;
        comments: number;
        uploadDate: string;
    };
    channel: {
        name: string;
        avatar: string | null;
        subscribers: string;
        isVerified: boolean;
    };
    theme: "light" | "dark";
}

export const initialYoutubedata: Youtubedata = {
    video: {
        title: "How to Build a Modern SaaS Application in 2026 (Full Course)",
        thumbnail: null,
        duration: "18:42",
        views: 12542,
        likes: 1845,
        comments: 188,
        uploadDate: "3 days ago",
    },
    channel: {
        name: "Code Academy",
        avatar: null,
        subscribers: "1.2M",
        isVerified: true,
    },
    theme: "light",
};
