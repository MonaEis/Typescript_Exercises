console.log(fetch("https://jsonplaceholder.typicode.com/posts/1/comments"));

type Mail = {
    email: string;
};

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const mailArray = data.map((item: Mail) => item.email);
        console.log(mailArray);
    })
    .catch((error) => console.log(error));


// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 


type Posts = {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}


fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
        //* alle Posts
        console.log("alle Posts: ", data);

        //* IDs aus Array
        const idArray = data.map((idItem: Posts) => idItem.id);
        // console.log(idArray);

        //* höchste ID
        const maxID = Math.max(...idArray);
        console.log("höchste ID: ",maxID);

        //* kürzester title
        const titleArray = data.map((titleItem: Posts) => titleItem.title).sort((a: string, b: string) => a.length - b.length);
        console.log("kürzerster Titel: ", titleArray[0])

        //* länster body
        const bodyArray = data.map((bodyItem: Posts) => bodyItem.title).sort((a: string, b: string) => b.length - a.length);
        console.log("längster body: ", bodyArray[0])
        
    })
    .catch((error) => console.log(error));
