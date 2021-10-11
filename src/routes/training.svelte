<script>
	import { Container, Col, Row } from 'sveltestrap';
	import Navbar from '../lib/navbar.svelte';
</script>

<Navbar />
<Container class="mt-4">
	<h1>Vídeos</h1>
	<Row cols={{ lg: 3, md: 2 }}>
		<Col sm="12" class="mt-3">
			<div class="ratio ratio-16x9">
				<iframe
					src="https://www.youtube.com/embed/jrnaTBj1WlY"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		</Col>
		<Col sm="12" class="mt-3">
			<div class="ratio ratio-16x9">
				<iframe
					src="https://www.youtube.com/embed/jrnaTBj1WlY"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		</Col>
		<Col sm="12" class="mt-3">
			<div class="ratio ratio-16x9">
				<iframe
					src="https://www.youtube.com/embed/jrnaTBj1WlY"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		</Col>
	</Row>
</Container>
