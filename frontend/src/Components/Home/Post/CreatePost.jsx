import React from 'react'

const CreatePost = () => {
  return (
    <div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

  
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Your Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Upload image url</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Enter the description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </div>
  )
}

export default CreatePost