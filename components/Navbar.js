import { useSignOut, useUser } from '@/hooks/user';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
	const router = useRouter();
	const user = useUser();
	const signOut = useSignOut();

	const handleLogout = async () => {
		await signOut();
		router.push('/sign-in');
	};

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
								{user.name}
							</li>
							<li>
								<button onClick={handleLogout}>Sign Out</button>
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