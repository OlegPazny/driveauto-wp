<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<meta name="description" content="" />
		<meta name="author" content="" />
		<title>Freelancer - Start Bootstrap Theme</title>
		<!-- Favicon-->
		<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
		<!-- Font Awesome icons (free version)-->
		<script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
		<!-- Google fonts-->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Ubuntu&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
		<!-- Core theme CSS (includes Bootstrap)-->
		<link href="<?php echo(get_template_directory_uri()); ?>/css/styles.css" rel="stylesheet" type="text/css" />
		<link href="<?php echo(get_template_directory_uri()); ?>/css/index.css" rel="stylesheet" type="text/css" />
		<link href="<?php echo(get_template_directory_uri()); ?>/css/finance_programs.css" rel="stylesheet" type="text/css" />
		<link href="<?php echo(get_template_directory_uri()); ?>/css/in_stock.css" rel="stylesheet" type="text/css" />
		<?php wp_head();?>
	</head>
	<body id="page-top">
		<!-- Navigation-->
		<nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
			<div class="container">
				<a class="navbar-brand" href="#page-top">Start Bootstrap</a>
				<button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					Menu
					<i class="fas fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<?php 
						$args=array('menu'              => '', // ID, имя или ярлык меню
							'menu_class'        => 'navbar-nav ms-auto', // класс элемента <ul>
							'menu_id'           => '', // id элемента <ul>
							'container'         => 'ul', // тег контейнера или false, если контейнер не нужен
							'container_class'   => 'navbar-nav ms-auto', // класс контейнера
							'container_id'      => '', // id контейнера
							'fallback_cb'       => 'wp_page_menu', // колбэк функция, если меню не существует
							'before'            => '', // текст (или HTML) перед <a
							'after'             => '', // текст после </a>
							'link_before'       => '', // текст перед текстом ссылки
							'link_after'        => '', // текст после текста ссылки
							'echo'              => true, // вывести или вернуть
							'depth'             => 0, // количество уровней вложенности
							'walker'            => '', // объект Walker
							'theme_location'    => '', // область меню
							'items_wrap'        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
							'item_spacing'      => 'preserve',
						);
						
						wp_nav_menu( $args );
					?>
					<!-- <ul class="navbar-nav ms-auto">
						<li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
						<li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
						<li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
					</ul> -->
				</div>
			</div>
		</nav>
		<!-- Masthead-->
<header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <!-- Masthead Avatar Image-->
                <img class="masthead-avatar mb-5" src="<?php echo(get_template_directory_uri());?>/assets/img/avataaars.svg" alt="..." />
                <!-- Masthead Heading-->
                <h1 class="masthead-heading text-uppercase mb-0"><?php bloginfo('name')?></h1>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Masthead Subheading-->
                <p class="masthead-subheading font-weight-light mb-0"><?php bloginfo('description')?></p>
            </div>
        </header>