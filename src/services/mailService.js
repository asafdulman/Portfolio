import emailjs from 'emailjs-com'
emailjs.init('user_07r1e8WdbD9XMYETXrLKS')


export const mailService = {
    submit
}

async function submit(message) {
    await emailjs.send('contact_service', 'template_hll03xj', message, 'user_07r1e8WdbD9XMYETXrLKS')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (err) {
            console.log('FAILED...', err);
        });
}