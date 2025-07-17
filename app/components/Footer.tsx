export async function Footer() {
	const thisYear = new Date().getFullYear();

	return (
		<p className="text-gray-400">
			© {thisYear} Franco Elias Inzerillo. Todos los derechos reservados.
		</p>
	);
}
