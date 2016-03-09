# test
test

Titulo
======
```
<p>Ejemplo de parrafo</p>
```


```php
<?php

class Example 
{
  /**
   * @var string
   */
  private $name;
  
  public function __construct(App $app) 
  {
    $this->app = $app;
  }
  
  /**
   * @param $name
   * @return string|Example
   */
  public function name($name = null) 
  {
    if (! $name) 
    {
      return $this->app->example;
    }
    
    $this->app->example = $name;
  }
}
```


[Sitio web](http://www.alezvi.com.ar)
