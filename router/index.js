import express from 'express'

let router = express.Router();

router.use((req, res, next) => {
    next();
})
router.get('/', (req, res) => {
    res.render('index');
})
export default router