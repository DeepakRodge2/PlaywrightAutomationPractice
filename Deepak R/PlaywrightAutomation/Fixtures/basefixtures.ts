import { test as base } from '@playwright/test';
import { pagemanager } from '../Pages/Common/Pagemanager';

type MyFixtures = {
     Pagemanager: pagemanager;
};

export const test = base.extend<MyFixtures>({
    Pagemanager: async ({ page }, use) => {
        await use(new  pagemanager(page));
    },
});