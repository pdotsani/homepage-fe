<script>
  import './app.css';
  import routes from './routes';

  const { HOME, RESUME } = routes;
</script>

<div>
  <div class="navigation">
    <a href={HOME}>Home</a>
    <a href={RESUME}>Resume</a>
  </div>
  <slot></slot>
</div>

<style>
  .navigation {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }

  a {
    color: bisque;
    text-decoration: none;
    margin: 0 5px;
  }
</style>