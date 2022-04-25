exports.formNewVacant = (req, res) => {
    res.render('new-vacant', {
        namePage: 'New Vacant',
        tagline: 'Fill the form and publish your vacant'
    })
}