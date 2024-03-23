export const index = (req, res) => {
    const { year } = req.body;

    if (year % 100 != 0 && (year % 4 == 0 || year % 400 == 0)) {
        res.status(200).send({ message: `${year} is a Leap Year` });
    } 

    res.status(200).send({ message: `${year} is not Leap Year` });
            
};

export const web = (req, res) => {
    res.send('Hello Home');
}
