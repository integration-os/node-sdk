import { ListFilter, PaginationHelperFetch } from "./types";

export class PaginationHelper<T> {
    private currentBatch: T[] = [];
    private nextBatch: T[] | null = null;
    private currentCursor: string | undefined;
    private nextCursor: string | undefined;
    private isInitialized: boolean = false;

    private defaultBatchSize: number = 25

    constructor(
        private fetchFunction: PaginationHelperFetch<T>,
        private listParams: ListFilter = {
            limit: this.defaultBatchSize
        }
    ) { }

    async initialize(): Promise<void> {
        if (this.isInitialized) return;

        const firstResponse = await this.fetchFunction({ ...this.listParams });
        this.currentBatch = firstResponse.unified;
        this.currentCursor = firstResponse.pagination.nextCursor;

        if (this.currentCursor) {
            const secondResponse = await this.fetchFunction({
                ...this.listParams,
                cursor: this.currentCursor
            });

            this.nextBatch = secondResponse.unified;
            this.nextCursor = secondResponse.pagination.nextCursor;
        }

        this.isInitialized = true;
    }

    async getNextBatch(): Promise<T[]> {
        if (!this.isInitialized) {
            await this.initialize();
        }

        const batchToReturn = this.currentBatch;
        this.currentBatch = this.nextBatch || [];
        this.currentCursor = this.nextCursor;

        if (this.currentCursor) {
            const response = await this.fetchFunction({
                ...this.listParams,
                cursor: this.currentCursor
            });

            this.nextBatch = response.unified;
            this.nextCursor = response.pagination.nextCursor;
        } else {
            this.nextBatch = null;
            this.nextCursor = undefined;
        }

        return batchToReturn;
    }

    hasMoreData(): boolean {
        return this.currentBatch.length > 0 || (this.nextBatch !== null && this.nextBatch.length > 0);
    }
}
