<script>
  import { PUBLIC_PROFILE_IMAGE_URL } from "$env/static/public";
  export let data;
  const resume = data.data[0] || {};
  const skills = resume.skills || [];
  const experiences = resume.experiences || [];
</script>

<div class="resume_body">
  <div class="contact">
    <img class="avatar" src={PUBLIC_PROFILE_IMAGE_URL} alt="profile" />
    <h1>{resume.name}</h1>
    <div>{resume.city}</div>
    <div>
      <a href={`mailto:${resume.email}`} target="_blank">{resume.email}</a>
    </div>
  </div>

  {#if skills.length}
  <div class="skills">
    <h2>Skills</h2>
    <div class="skills_list">
      {#each skills as skill}
        <span class="skill">{skill} <span class="skill_seperator">&#149;</span></span>
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
        <div class="start_and_end_date">{experience.startDate} - {experience.endDate}</div>
        <div>{experience.location}</div>
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
    text-align: center;
    margin-bottom: 50px;
  }

  .contact h1 {
    margin-bottom: 5px;
  }

  .contact a {
    color: gray;
  }

  .avatar {
    border-radius: 50%;
  }

  span.skill {
    margin: 0;
  }

  span.skill span:first-child {
    margin-left: 0;
  }

  span.skill span:last-child {
    margin-right: 0;
  }

  span.skill span.skill_seperator {
    margin-right: 5px;
  }

  span.skill:last-child span.skill_seperator {
    display: none;
  }

  .experience_list .start_and_end_date {
    font-style: italic;
    color: cornsilk;
  }

  @media only screen and (max-width: 800px) {
    .resume_body {
      max-width: 100%;
    }
  }
</style>