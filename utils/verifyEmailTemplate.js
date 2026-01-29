const verifyEmailTemplate = ({ name, url }) => {
    return `
        <p>Dear ${name},</p>

        <p>Thank you for registering with KMART.</p>

        <a 
            href="${url}" 
            style="
                display:inline-block;
                padding:10px 20px;
                color:white;
                background:blue;
                margin-top:20px;
                text-decoration:none;
                border-radius:4px;
            "
        >
            Verify Email
        </a>
    `
}

export default verifyEmailTemplate
