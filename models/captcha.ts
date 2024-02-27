interface CaptchaResponse {
    captcha: string;
    id: string;
}

interface CaptchaRef {
    requestCaptcha: () => Promise<void>;
}
