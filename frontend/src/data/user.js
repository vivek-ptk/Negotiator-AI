const user = {
    id: "1234",
    name: "",
    email: "dummy@wow.com",
    products: [
        {
            name: "product1",
            cost: 100 - 200,
            description: "This is a product",
            image: "image1",
            time: "14:42",
            conditions: "should be handled with care"
        }
    ],
    chats: [
        {
            talkingTo: "seller1",
            messages: [
                {
                    sender: "seller1",
                    message: "Hello, I am selling a product"
                },
                {
                    sender: "buyer1",
                    message: "I am interested in your product"
                }
            ]
        }
    ],
}
export default user;