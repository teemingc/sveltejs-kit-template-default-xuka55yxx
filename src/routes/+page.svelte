<script>
  import { demo } from './demo.remote';
</script>

<form {...demo}>
	<!-- because the field is optional, ts can't autocomplete the field name in the string below  -->
	<input name={demo.field('')} />
	<button type="submit">Demo submit</button>
</form>
