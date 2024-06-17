export const getOSNames = async () => {
    const res = await fetch("https://api.dhaivathlal.in/os/");
    const data = await res.json();
    // console.log("fetching os names");
    return data;
};

export const getLanguageChart = async () => {
    const headers = { Authorization: `Bearer ${process.env.GH_AUTH_TOKEN}` };
    const response = await fetch("https://api.github.com/user/repos", {
        headers
    });
    const data: any[] = await response.json();

    const repoMap = data.map((val) => ({
        name: val.name,
        langURL: val.languages_url
    }));
    const repoLangMapPromise = repoMap.map((repo) =>
        fetch(repo.langURL, { headers })
    );
    const responses = await Promise.all(repoLangMapPromise);
    const repoAndLanguages = await Promise.all(
        responses.map((res) => res.json())
    );

    let totalLangShare: any[] = [];
    if (repoAndLanguages) {
        totalLangShare = repoAndLanguages.reduce((acc, val) => {
            for (let key in val) {
                const exclusion = ["CSS", "SCSS"];
                if (exclusion.indexOf(key) != -1) return acc;
                if (acc[key]) acc[key] += val[key];
                else acc[key] = val[key];
            }
            return acc;
        }, {});
        let total = 0;
        for (let k in totalLangShare) total += totalLangShare[k];
        for (let k in totalLangShare)
            totalLangShare[k] = ((totalLangShare[k] / total) * 100).toFixed(2);
    }
    return totalLangShare as any;
};

export const fetchOSContent = async (id: number) => {
    console.log("fetching os content");
    const res = await fetch(`https://api.dhaivathlal.in/os/${id}`, {
        next: {
            revalidate: 3600
        }
    });
    const data = await res.json();
    return data;
};
