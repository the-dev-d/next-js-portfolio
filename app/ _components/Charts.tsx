import { getLanguageChart } from "../_lib/servercalls";

type ChartProps = {
    children: React.ReactNode;
};

export const Charts: React.FC<ChartProps> = async ({ children }) => {
    const langShare = await getLanguageChart();
    return (
        <div className="p-6">
            <h3 className="my-6">{children}</h3>
            <div className="mt-6">
                {Object.keys(langShare).map(
                    (language: string, index: number) => {
                        // Add type annotation to index parameter
                        return (
                            <div
                                key={index}
                                className="w-full flex items-center bg-emerald-900/30 rounded-md my-2"
                            >
                                <div
                                    style={{
                                        minWidth: `${langShare[language]}%`
                                    }}
                                    className="h-full flex items-center justify-end py-4 px-2 bg-gradient-to-l from-indigo-500 to-indigo-400 rounded-md"
                                >
                                    <span className="text-indigo-950 text-sm lg:text-base font-semibold">
                                        {langShare[language]}%
                                    </span>
                                </div>
                                <span className="ml-4 text-indigo-200 font-semibold">
                                    {language}
                                </span>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};
