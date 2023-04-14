const express = require('express'),
layouts = require('express-ejs-layouts')
app = express(),
PORT = process.env.PORT || 6600,
appName = `App`


app.use(layouts)
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('home', { title: `Home - ${appName}` })
})

app.get('/about', (req, res) => {
    res.render('about', { title: `About - ${appName}` })
})

app.get('/blogs', (req, res) => {
    res.render('blogs', { title: `Blogs - ${appName}` })
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: `Contact - ${appName}` })
})

app.get('*', (req, res) => {
    res.status(404).render('404', {title: `404 Not Found - ${appName}`})
})

app.listen(PORT, () => console.info(`App listening on port ${PORT}`))