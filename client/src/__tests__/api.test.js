import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);


test('it returns data', async () => {
    const apiClient = {
        getData: jest.fn(() => {
            return Promise.resolve({
                data: {
                    items: [{
                        title: "flowers",
                        authors: ["Martha Stewart"],
                        publisher: "publishing company"
                    }]
                }
            })
        })
    }

    try {
        const response = await apiClient.getData('flowers');
        expect(response).toStrictEqual({
            data: {
                items: [{
                    title: "flowers",
                    authors: ["Martha Stewart"],
                    publisher: "publishing company"
                }]
            }
        });
    } catch (e) {
        expect(e).toEqual('error')
    }
});


test('should return an error', async () => {
    const apiClient = {
        getData: jest.fn(() => {
            return Promise.reject('error');
        })
    }

    expect.assertions(1);

    try {
        await apiClient.getData('lkdjf;eksdj;a')
    } catch (e) {
        expect(e).toEqual('error')
    }
});

