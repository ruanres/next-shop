import Link from 'next/link';

function Navbar() {
	const user = undefined;
	return (
		<nav className='px-2 py-1 text-sm'>
			<ul className='flex gap-2'>
				<li className='text-lg font-extrabold'>
					<Link href="/">Next Shop</Link>
				</li>
				<li role='separator' className='flex-1'/>
				{
					user ? (
						<>
							<li>
                Alice
							</li>
							<li>
								<button>Sign Out</button>
							</li>
						</>
					) : (
						<li>
							<Link href="/sign-in">Sign In</Link>
						</li>
					)
				}
				
			</ul>
		</nav>
	);
}

export default Navbar;