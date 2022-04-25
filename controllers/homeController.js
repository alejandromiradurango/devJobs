exports.showWorks = (req, res) => {
    res.render('home', {
        namePage: 'devJobs',
        tagline: 'Find and Public Works for Web Developers',
        searchBar: true,
        button: true
    })
}