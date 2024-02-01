<script>
  export let data;
  const resume = data.data[0] || {};
  const skills = resume.skills || [];
  const experiences = resume.experiences || [];
</script>

<div class="resume_body">
  <div class="contact">
    <h1>{resume.name}</h1>
    <div>{resume.city}</div>
    <div>{resume.email}</div>
  </div>

  {#if skills.length}
  <div class="skills">
    <h2>Skills</h2>
    <div class="skills_list">
      {#each skills as skill}
        <span class="skill">{skill}</span>
      {/each}
    </div>
  </div>
  {/if}

  {#if experiences.length}
  <div class="experience">
    <h2>Experience</h2>
    {#each experiences as experience}
      <div class="experience_list">
        <div>{experience.title}</div>
        <div>{experience.company}</div>
        <div>{experience.location}</div>
        <div>{experience.startDate} - {experience.endDate}</div>
        <!-- <div>{experience.description}</div> -->
      </div>
    {/each}
  </div>
  {/if}
</div>

<style>
  .contact, .skills, .experience {
    width: 100%;
  }

  .skills h2, .experience h2, .skills_list, .experience_list {
    text-align: center;
  }

  .resume_body {
    margin: 0 auto;
    max-width: 70vw;
  }

  .contact {
    text-align: right;
  }

  span.skill {
    margin: 5px;
  }

  span.skill span:first-child {
    margin-left: 0;
  }

  span.skill span:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 800px) {
    .resume_body {
      max-width: 100%;
    }
  }
</style>