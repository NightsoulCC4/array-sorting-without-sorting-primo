import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {

    //test01
    const collection_1: Number[] = [3, 6, 1, 2, 8];
    const collection_2: Number[] = [1, 2, 1, 3];

    //test02
    const collection_3: Number[] = [0, 9, 6, 2, 2, 5, 3, 10, 15];
    const collection_4: Number[] = [1, 5, 3, 2, 1, 4, 2];

    //test03
    const collection_5: Number[] = [3, 6, 1, 2, 6, 1, 2, 8];
    const collection_6: Number[] = [2, 2, 5, 3, 10, 5, 1, 3];

    // let result: Number[] = collection_1.concat(collection_2);
    let result: Number[] = collection_3.concat(collection_4);
    // let result: Number[] = collection_5.concat(collection_6);

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                let keyholder = result[i];
                result[i] = result[j];
                result[j] = keyholder;
            }
        }
    }

    console.log("array after sort: ", collection_1.concat(collection_2))
    // console.log("array after sort: ", collection_3.concat(collection_4))
    // console.log("array after sort: ", collection_5.concat(collection_6))
    console.log("array after sort: ", result)

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
            <Head>
                <title>Array sorting without sort function</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white">
                <h1 className="text-6xl font-bold">
                    Array sorting without sort function.
                </h1>

                <div className="w-10/12 h-40 bg-slate-200 text-gray-900 rounded-md mt-6">
                    <h1>
                        Press 12 to open the console for seeing the result, And they have 3 unit tests with 6 arrays.
                    </h1>
                </div>
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t bg-slate-400">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
            </footer>
        </div>
    )
}

export default Home
