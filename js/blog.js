let id = document.getElementById("txtid");
let title = document.getElementById("txttitle");
let content = document.getElementById("txtcontent");
let tags = document.getElementById("txttags");
let category = document.getElementById("txtcategory");
let comment = document.getElementById("txtcomment_count");
let createtime = document.getElementById("create_date");
let updatetime = document.getElementById("update_date");
let image = document.getElementById("image_upload");
let buttonSubmit=document.getElementById("btnsubmit");

function SubmitButton() {
    let request = {
        "id": id.value,
        "title": title.value,
        "content": content.value,
        "tags": tags.value,
        "category": category.value,
        "comments_count": comment.value,
        "created_at": createtime.value,
        "updated_at": updatetime.value,
        "image_url": image.value
    }

    fetch("http://localhost:8080/", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Blog added:", data);
        alert("Blog Added Successfully");
        clearForm();
    });
}

function deleteButton() {
    let deleteId = id.value;
   
    fetch(`http://localhost:8080/${deleteId}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log("Blog deleted:", data);
        alert("Blog Deleted Successfully");
        clearForm();
    });
}

function updateButton() {
    let blogData = {
        id: id.value,
        title: title.value,
        content: content.value,
        tags: tags.value,
        category: category.value,
        comments_count: comment.value,
        created_at: createtime.value,
        updated_at: updatetime.value,
        image_url: image.value
    };
    
    fetch("http://localhost:8080/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Blog updated:", data);
        alert("Blog Updated Successfully");
        clearForm();
    });
}

function clearForm() {
    id.value = "";
    title.value = "";
    content.value = "";
    tags.value = "";
    category.value = "";
    comment.value = "";
    createtime.value = "";
    updatetime.value = "";
    image.value = "";
}
buttonSubmit.addEventListener("click", SubmitButton);
