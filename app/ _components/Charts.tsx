import { getLanguageChart } from "../_lib/servercalls";

type ChartProps = {
    children: React.ReactNode;
};

export const Charts: React.FC<ChartProps> = async ({ children }) => {
    const langShare = await getLanguageChart();
    let langColorMap: any = {};
    return (
        <div className="p-6">
            <h3 className="my-6">{children}</h3>
            <div className="mt-6">
                <div className="w-full flex gap-1">
                    {Object.keys(langShare).map(
                        (language: string, index: number) => {
                            let color;
                            do {
                                color =
                                    "#" +
                                    ((Math.random() * 0xffffff) << 0)
                                        .toString(16)
                                        .padStart(6, "0");
                            } while (langColorMap[color] !== undefined);
                            const map = {
                                color,
                                percentage: langShare[language]
                            };
                            langColorMap[language] = map;

                            return (
                                <div
                                    key={index}
                                    className="flex items-center bg-emerald-900/30 rounded-md my-2 p-2 py-4"
                                    style={{
                                        width: `${langShare[language]}%`,
                                        backgroundColor: color
                                    }}
                                ></div>
                            );
                        }
                    )}
                </div>
                <div className="flex my-6 gap-6 flex-wrap">
                    {Object.keys(langColorMap).map(
                        (language: string, index: number) => {
                            return (
                                <div
                                    className="flex gap-2 items-center justify-center"
                                    key={index}
                                >
                                    <div
                                        style={{
                                            backgroundColor:
                                                langColorMap[language].color
                                        }}
                                        className="p-1 rounded-md"
                                    >
                                        <span className="text-xs font-semibold">
                                            {langColorMap[language].percentage}%
                                        </span>
                                    </div>
                                    <span className="mr-2 text-xs font-semibold">
                                        {language}
                                    </span>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
};
