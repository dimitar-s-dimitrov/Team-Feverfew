===== TODO ==============================================================
* Implement audio module, which handles the audio html element
* Implement css transition to improve the animations performance
* Remove jquery animations - accepted by d0ntth1nc

* Until now the modules system returns new object every time when module is required.
  Maybe it is better to have only one module object everywhere.
  With this change we won't have to pass the module across the other modules via functions
  and we can just require() it. Loose coupling improvement.
==========================================================================
