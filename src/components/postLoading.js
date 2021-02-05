import React from 'react';
import '../stories.css'


function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				<div class="loader">
			<div className="loader-inner">
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
			</div>
</div>
			</p>
		);
	};
}
export default PostLoading;
