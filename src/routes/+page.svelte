<script>
  export let data;

  const resume = data.data[0];
</script>

<div>
  <h1>{resume.name}</h1>
  <div>{resume.city}</div>
  <div>{resume.email}</div>
</div>