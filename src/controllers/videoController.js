

export const trendVideo = (req,res) => {
    const videos = [
        {
            title: "First Video",
            rating:5,
            comments:2,
            createdAt: "2 minutes ago",
            views:59,
            id:1
        },
        {
            title: "second Video",
            rating:5,
            comments:2,
            createdAt: "2 minutes ago",
            views:59,
            id:1
        },
        {
            title: "third Video",
            rating:5,
            comments:2,
            createdAt: "2 minutes ago",
            views:59,
            id:1
        }
    ];
    return res.render("home", { pageTitle: "Home",videos})
};

export const see = (req,res) => res.render("watch");
export const editUser = (req,res) => res.render("edit", { pageTitle: "edit" });

export const search = (req,res) => res.send("Search");
export const upload = (req,res) => res.send("upload");
export const deleteVideo = (req,res) => {
    console.log(req.params);
    return res.send("deleteVideo");
}
