<?php

namespace AppBundle\DataFixtures;

use AppBundle\Entity\Product;
use AppBundle\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        // create 20 products! Bam!
        /*for ($i = 0; $i < 20; $i++) {
            $product = new Product();
            $product->setName('product '.$i);
            $product->setPrice(mt_rand(10, 100));
            $manager->persist($product);
        }*/

        $user = new User();
        $user->setUsername('admin');

        $user->setFirstname('Thibaud');
        $user->setLastname('Crespin');
        $user->setEmail('admin@admin.com');
        
        $user->setRole('ADMIN');

        $password = $this->encoder->encodePassword($user, '111111');
        $user->setPassword($password);

        $manager->persist($user);

        $manager->flush();
    }
}