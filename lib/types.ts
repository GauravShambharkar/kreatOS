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
