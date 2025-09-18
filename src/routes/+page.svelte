<script>
  import { demo } from './demo.remote';
</script>

<form {...demo}>
	<input name={demo.field('demo')} /> <!-- Loose type safety -->
	<button type="submit">Demo submit</button>
</form>
