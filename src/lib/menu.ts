export interface MenuItem {
    label: string
    path?: string
    children?: MenuItem[]
}

export const fullMenu: MenuItem[] = [
    {
        label: "About Us",
        children: [
            { label: "Overview", path: "/about" },
            { label: "Our Legacy", path: "/about/history" },
            { label: "Founders", path: "/about/founders" },
            { label: "Vision & Mission", path: "/about/vision-mission" },
            { label: "Chairman", path: "/about/chairman-message" },
            { label: "Principal", path: "/about/principal-message" },
            { label: "Director of Studies", path: "/about/director-of-studies" },
        ],
    },
    {
        label: "Admissions",
        path: "/admissions",
    },
    {
        label: "Academics",
        children: [
            { label: "Overview", path: "/academics" },
            { label: "PUC", path: "/academics/puc" },
            { label: "BCA", path: "/academics/bca" },
            { label: "B.COM", path: "/academics/bcom" },
            { label: "B.COM with Data Analytics", path: "/academics/bcom-data-analytics" },
        ],
    },
    {
        label: "Campus",
        path: "/infrastructure",
    },

    {
        label: "Non Academics",
        children: [
            { label: "Overview", path: "/non-academics" },
            { label: "Sports", path: "/non-academics/sports" },
            { label: "Cultural", path: "/non-academics/cultural" },
            { label: "Spiritual", path: "/non-academics/spiritual" },
            { label: "NSS", path: "/non-academics/nss" },
        ],
    },
    {
        label: "Student Life",
        children: [
            { label: "Student Welfare", path: "/student-life" },
            { label: "Anti Ragging", path: "/student-life/anti-ragging" },
            { label: "Placements", path: "/student-life/placement" },
        ],
    },
    {
        label: "Faculty",
        path: "/faculty",
    },
    {
        label: "Contact Us",
        path: "/contact",
    },
    {
        label: "Downloads",
        path: "/downloads",
    },
]
