/**
 * Work names.
 */
export type WorkType =
	| 'tugas'
	| 'question'
	| 'zadanie'
	| 'tarefa'
	| 'tarea'
	| 'gorev'
	| 'tema'
	| 'task';
/**
 * Country List.
 */
export type CountryList =
	| 'id'
	| 'us'
	| 'es'
	| 'ru'
	| 'ro'
	| 'pt'
	| 'tr'
	| 'ph'
	| 'pl'
	| 'hi';
/**
 * The languages with their base url.
 */
export type BaseURLObject = Record<LanguageList, string>;
/**
 * The question/answer attachments.
 * Alias 'Array<String>'
 */
export type Attachments = string[];

/**
 * Raw JSON Response from Brainly.
 */
export type JsonRes = {
	data: {
		questionSearch?: {
			edges: BrainlyResponse[];
		};
		user?: OriginalAuthor;
		question?: OriginalQuestionAndSimilar;
	};
};

/**
 * The question.
 */
export interface Question {
	/**
	 * Question ID
	 */
	id: string;
	/**
	 * The question contents.
	 */
	content: string;
	closed: boolean;
	/**
	 * Question created time.
	 */
	created: CreatedInterface;
	/**
	 * The question attachments, it could be an empty array!
	 */
	attachments: Attachments;
	/**
	 * The questioner, it could be undefined.
	 */
	author?: Author;
	/**
	 * Question's lesson category.
	 */
	education: string;
	educationLevel?: number;
	/**
	 * Can we answer the question?
	 */
	canBeAnswered: boolean;
	/**
	 * If we answer the question, how many points will we receive?
	 */
	pointsAnswer: {
		forBest: number;
		normal: number;
	};
	/**
	 * Points issued by the questioner.
	 */
	pointsQuestion: number;
	/**
	 * The question's grade level
	 */
	grade: string;
	/**
	 * Last activity.
	 */
	lastActivity?: string;
	/**
	 * This question is have verified answer?
	 */
	verifiedAnswer: boolean;

	/**
	 * Database ID
	 */
	databaseId: number;

	/**
	 * Similar questions
	 */
	similars: Question[];

	/**
	 * Get clean content from question
	 */
	cleanContent: () => string;
}

/**
 * Answer
 */
export interface Answer {
	/**
	 * The answer identifier
	 */
	id: string;
	/**
	 * The answer contents.
	 */
	content: string;
	/**
	 * The answerer, it could be undefined.
	 */
	author?: Author;
	/**
	 * Is this best answer?
	 */
	isBest: boolean;
	/**
	 * How many points are awarded to the answerer?
	 */
	points: number;
	confirmed: boolean;
	score: number;
	/**
	 * The answer's rates count.
	 */
	ratesCount: number;
	/**
	 * The answer's thanks count.
	 */
	thanksCount: number;
	/**
	 * Question attachments, it could be an empty array!
	 */
	attachments: Attachments;
	/**
	 * When the answer is created?
	 */
	created: CreatedInterface;
	/**
	 * Can we comment to this answer?
	 */
	canComment: boolean;
	verification?: OriginalVerification;
	/**
	 * The comments.
	 */
	comments: Comment[];
	/**
	 * Database ID
	 */
	databaseId: number;
	/**
	 * Get clean content from the answer
	 */
	cleanContent: () => string;
}

export interface Comment {
	/**
	 * Comment ID (comment identifier)
	 */
	id: string;
	/**
	 * The comment's author.
	 */
	author?: OriginalComment['author'];
	/**
	 * The comment contents.
	 */
	content: string;
	/**
	 * Comment is already deleted?
	 */
	deleted?: boolean;

	/**
	 * Database ID
	 */
	databaseId: number;
}

export interface OriginalComment {
	id: string;
	deleted?: boolean;
	content: string;
	author: {
		id: string;
		nick: string;
		avatar: {
			url: string;
			thumbnailUrl: string;
		};
		friends: { count: number };
		receivedThanks: number;
		points: number;
		created: string;
	};
}

export type OriginalAttachments = {
	url: string;
}[];

export interface OriginalAuthor {
	id: string;
	nick: string;
	avatar: {
		url: string;
		thumbnailUrl: string;
	};
	helpedUsersCount: number;
	gender: string;
	created: string;
	specialRanks: {
		name: string;
	}[];
	bestAnswersCount: number;
	answererLevel: string;
	receivedThanks: number;
	points: number;
	rank: { name: string };
	friends: { count: number };
	answeringStreak?: {
		pointsForToday: number;
		pointForTommorow: number;
		progressIncreasedToday: boolean;
		progress: number;
		canLotteryPointsBeClaimed: boolean;
	};
	bestAnswersCountInLast30Days: number;
	questions: {
		count: number;
		edges: {
			node: {
				content: string;
				grade: { name: string };
				subject: { name: string; id: string };
				points: number;
				pointsForBestAnswer: number;
				pointsForAnswer: number;
				isClosed: boolean;
				canBeAnswered: boolean;
				created: string;
				attachments: OriginalAttachments;
				eduLevel?: number;
			};
		}[];
	};
}

export interface OriginalVerification {
	approval: {
		approver: {
			nick: string;
			id: string;
		};
	};
}

export interface OriginalQuestion {
	id: string;
	content: string;
	author: OriginalAuthor;
	attachments: OriginalAttachments;
	points: number;
	pointsForAnswer: number;
	pointsForBestAnswer: number;
	created: string;
	isClosed: boolean;
	canBeAnswered: boolean;
	grade: { name: string };
	lastActivity?: string;
	subject: {
		name: string;
		id: string;
	};
	eduLevel?: number;
	answers: {
		hasVerified: boolean;
		nodes: OriginalAnswer[];
	};
}

export interface OriginalQuestionAndSimilar extends OriginalQuestion {
	similar: {
		question: OriginalQuestion;
	}[];
}

export interface OriginalAnswer {
	id: string;
	content: string;
	created: string;
	isBest: boolean;
	isConfirmed: boolean;
	points: number;
	qualityScore: number;
	thanksCount: number;
	ratesCount: number;
	author: OriginalAuthor;
	verification: OriginalVerification;
	attachments: OriginalAttachments;
	canComment: boolean;
	comments: {
		count: number;
		edges: {
			node: OriginalComment;
		}[];
	};
}

export interface Author {
	/**
	 * The author's ID (author identifier).
	 */
	id: string;
	/**
	 * The author's username.
	 */
	username?: string;
	/**
	 * The author's avatar url.
	 */
	avatarUrl?: string;
	/**
	 * The author's rank.
	 */
	rank: string;
	/**
	 * The author's gender.
	 */
	gender: string;
	/**
	 * The author's points.
	 */
	points: number;
	/**
	 * The author's thank you points.
	 */
	receivedThanks: number;
	bestAnswersCount: number;
	helpedUsersCount: number;
	specialRanks: string[];
	friendsCount: number;
	created: CreatedInterface;
	bestAnswers: {
		count: number;
		InLast30Days: number;
	};
	answerStreak?: OriginalAuthor['answeringStreak'];
	questions: {
		count: number;
		data: AuthorQuestionData[];
	};
	databaseId: number;
}

export interface AuthorQuestionData {
	content: string;
	created: CreatedInterface;
	closed: boolean;
	education: string;
	canBeAnswered: boolean;
	attachments: string[];
	educationLevel: number;
	pointsAnswer: {
		forBest: number;
		normal: number;
	};
	pointsQuestion: number;
	grade: string;
}

export interface CreatedInterface {
	iso: string;
	date: Date;
}

export interface BrainlyResponse {
	node: OriginalQuestionAndSimilar;
}

export type LanguageList = CountryList;
