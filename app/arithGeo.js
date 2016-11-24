module.exports = {
	aritGeo:function (arraynum)
	{
	  if (arraynum.length === 0)
	  {
		return 0;
	  }
	  var commondiff = arraynum[1]- arraynum[0];
	  for (var i = 1; i < arraynum.length; i++)
	  {
		var num = arraynum[0] + (i * commondiff);
		if (num !== arraynum[i])
		{
		  break;
		}
		else if (i == arraynum.length-1)
		{
		  return 'Arithmetic'
		}
	  }
	   var commonratio = arraynum[1]/arraynum[0];
	  for (var i =1; i < arraynum.length; i++)
	  {
		var geonum = arraynum[0] * Math.pow(commonratio, i);
		if (geonum !== arraynum[i])
		{
		  break;
		}
		else if (i == arraynum.length-1)
		{
		  return 'Geometric';
		}
	  }
	  return -1;
	}
	}
