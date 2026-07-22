import { useState } from "react";

function NewsletterSubscribe() {
    // useState Variables here
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const submitForm = () => {
        setSubmitted(true);
    };

    return !submitted ? (
        <div className="card container mt-3 p-3">
            <h1 className=" text-black">Newsletter Subscription</h1>
            <form onSubmit={submitForm}>
                <div className="mb-2">
                    <input type="text" className="form-control" onChange={(event) => setNameEntry(event.target.value)} placeholder="Your Name" />
                </div>

                <div className="mb-3">
                    <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your Email" />
                </div>

                <button className="btn btn-primary mx-auto">Subscribe</button>
            </form>
        </div>
    ) : (
        <div className="bg-success border border-success m-3">
            <h3 className="text-white m-3">Please check your email ({email}) for confirmation</h3>
        </div>
    );
}

export default NewsletterSubscribe;
