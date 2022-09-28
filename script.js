document.getElementById('btnGetActivity').addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('activity').textContent = data.activity;

            document.getElementById('title').textContent = 'Yay🥳you found something to do!'
            document.body.classList.add('found-activity')
            
            const desc = document.getElementById('description')
            if(desc !== null) {
                desc.remove()
            }
              
        })
})