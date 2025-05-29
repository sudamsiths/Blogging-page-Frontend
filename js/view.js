console.log("Hello");

async function loadBlogs() {
    const BlogList = document.getElementById("BlogList");
    let body = "";
    
    const response = await fetch("http://localhost:8080/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = await response.json();
    console.log("Response Received:", data);
    
    const blogs = Array.isArray(data) ? data : (data.blogs || data.data || []);
    
    blogs.forEach(element => {
          body += `
            <div class="col">
                <div class="card shadow-sm">
                    <img src="${element.image_url}" class="card-img-top" alt="${element.title}" style="height: 225px; object-fit: cover;>
                    <div class="card-body">
                        <h2 class="card-title"><b>${element.title}</h2></b>
                        <p class="card-text">${element.content}</p>
                        <h6>${element.tags}</h6>
                        <h6><b>Category: ${element.category}</b></h6>
                        <h6>Created: ${element.created_at}</h6>
                        <h6>Updated: ${element.updated_at}</h6>
                        <h6>Comments: ${element.comments_count}</h6>
                   
                    </div>
                </div>
            </div>
        `;
    });
    
    BlogList.innerHTML = body;
}

function SearchButton() {
    const BlogList = document.getElementById("BlogList");
    let body = "";
    let searchTxt = document.getElementById("searchButton").value;
    console.log(searchTxt);
    
    fetch(`http://localhost:8080/${searchTxt}`)
        .then(res => res.json())
        .then(data => {
            body += `
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="${data.image_url}" class="card-img-top" alt="${data.title}" style="height: 225px; object-fit: cover;">
                        <div class="card-body">
                            <h2 class="card-title"><b>${data.title}</h2></b>
                            <p class="card-text">${data.content}</p>
                            <h6>${data.tags}</h6>
                            <h6><b>Category: ${data.category}</h6></b>
                            <h6>Created: ${data.created_at}</h6>
                            <h6>Updated: ${data.updated_at}</h6>
                            <h6>Comments: ${data.comments_count}</h6>
                        </div>
                    </div>
                </div>
            `;
            BlogList.innerHTML = body;
        });

}

loadBlogs();